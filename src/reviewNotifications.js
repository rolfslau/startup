const revEvent = {
    System: 'system',
    Book: 'book',
    Movie: 'movie',
    Music: 'music',
};

class EventMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class EventNotifier {
    events = [];
    handlers = [];

    constructor () {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage('Server', revEvent.System, {msg: 'connected'}));
        };
        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage('Server', revEvent.System, {msg: 'disconnected'}));
        };
        this.socket.onmessage = async (msg) => {
            try {
                const event = Json.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    receiveEvent(event) {
        alert(event);
    }
}

const EventNotifier = new EventNotifier();
export { revEvent, EventNotifier };