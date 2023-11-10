importScripts('./ngsw-worker.js');
importScripts('./firebase-app.js');
importScripts('./firebase-messaging.js');

// Promise that resolves when the Minga Firebase Web service has been
// initialized. The promise self-reintiializes so that you may open Minga and
// then wait for this promise to resolve before posting messages to the app.
var firebaseMessagingWebInit;
var firebaseMessagingWebInitResolve;
var firebaseMessagingWebInitReject;

(function () {
  function setupFirebaseMessagingWebInit() {
    firebaseMessagingWebInit = new Promise(function (resolve, reject) {
      firebaseMessagingWebInitReject = function (err) {
        setupFirebaseMessagingWebInit();
        reject(err);
      };
      firebaseMessagingWebInitResolve = function () {
        setupFirebaseMessagingWebInit();
        resolve();
      };
    });
  }

  setupFirebaseMessagingWebInit();
})();

self.addEventListener('message', function (event) {
  if (event.data && event.data.msgType === 'fbMsgWebReady') {
    firebaseMessagingWebInitResolve();
  }
});

self.addEventListener('notificationclick', function (ev) {
  function postNotificationMessage(client) {
    client.postMessage({
      msgType: 'fbMsgWebNotificationClick',
      payload: {
        type: 'notification',
        data: ev.notification.data || {},
        notification: {
          title: ev.notification.title,
          body: ev.notification.body,
        },
      },
    });
  }

  ev.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(function (clients) {
      if (clients.length === 0) {
        return self.clients
          .openWindow(self.origin)
          .then(function (client) {
            return firebaseMessagingWebInit.then(function () {
              return client;
            });
          })
          .then(postNotificationMessage);
      } else {
        for (var i = 0; clients.length > i; ++i) {
          var client = clients[i];
          postNotificationMessage(client);
        }

        return clients[0].focus();
      }
    }),
  );
});

fetch('/config.json')
  .then(resp => resp.json())
  .then(config => {
    firebase.initializeApp(config.firebaseConfig);

    if (firebase.messaging.isSupported()) {
      const messaging = firebase.messaging();

      messaging.setBackgroundMessageHandler(function (payload) {
        // This empty 'handler' is here on purpose
      });
    }
  });
