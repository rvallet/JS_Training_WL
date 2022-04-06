export function PubSub() {
  this.events = new Map();
}

PubSub.prototype.on = function (event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  let tabCallbacks = this.events.get(event) || [];
  tabCallbacks.push(callback);
  this.events.set(event, tabCallbacks);
};

PubSub.prototype.emit = function (event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`
  this.events.get(event).forEach((element) => {
    element(data);
  });
  // this.events.get("*").forEach((element) => {
  //   element(data);
  // });
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
