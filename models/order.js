class Order {

    constructor(order_id, date) {
        this.order_id = order_id;
        this.date = date;
    }

    get order_id() {
        return _order_id;
    }

    set order_id(order_id) {
        this._order_id = order_id;
    }

    get date() {
        return _date;
    }

    set date(date) {
        this._date = date;
    }


}