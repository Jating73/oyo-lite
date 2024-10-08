const USER_TYPE = {
    CUSTOMER: 1,
    HOTEL_ADMIN: 2,
    SUPER_ADMIN: 3
}

const RESPONSE_FLAGS = {
    "ACTION_COMPLETE": 1,
    "ACTION_FAILED": 2
}

const BOOKING_STATUS = {
    BOOKED: "BOOKED",
    CANCELLED: "CANCELLED"
}

const PAYMENT_MODE = {
    CASH: "CASH",
    ONLINE: "ONLINE"
}

const PAYMENT_STATUS = {
    PENDING: "PENDING",
    FAILED: "FAILED",
    COMPLETED: "COMPLETED"
}

module.exports = {
    USER_TYPE,
    RESPONSE_FLAGS,
    BOOKING_STATUS,
    PAYMENT_MODE,
    PAYMENT_STATUS
}