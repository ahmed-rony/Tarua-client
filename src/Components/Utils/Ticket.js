export const Ticket = {
    show: "Adom Surot",
    date: "2021-07-24",
    time: ["01:00 PM", "08:00 PM"],
    auditorium: "ShilpoKola Academy",
    seat: {
        A1: {
            seats: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14"],
            price: 100 // Price in dollars
        },
        A2: {
            seats: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14"],
            price: 120 // Example for another section
        },
        A3: {
            seats: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14"],
            price: 80 // Example for another section
        }
    }
};

// create me  mongoose models which i need for theatre drama events. so it'll be like admin can create suppose a drama called " Drama01", then later he can create events whever he wants by different date and different time, like in 14 feb there will be 2 shows for "Drama01" in different time, later 15 February there will be 3shows different time like that. so multiple shows can be created and multiple events time date if wants, this ends for the events and shows creation.  2nd part, so audience can purchase or book event shows by selecting seat numbers as shown on the image and I've provided the seats objects array, the seat plans will be different on different venue, so just save the venue and seat numbers when event tickets are being booked. 1 person can book max 5 tickets 1time. 3rd part, when a person wants to book seats I want a backend feature which will allow a person to book the tickets in a specific time like 5 minutes. it's gonna be like when I enter in the ticket page I've got 5 minutes after that the page will reload itself to start another session to book a ticket, then I choose max 5 seats and inputed my "email", then I apply which backend will take the info, then on backend 10 minutes will start in there that I have to transact the money manually on other transact app with my "email" address, the timer will be running in the mean time in frontend. so before there will be 5mins to reload the session and after apply there will be 10min on backend session. so admin will see who booked how many seats and the prices for those seats on his dashboard and will check admins mobile manually on that transact app if someone made any transaction, and if the emails and prices match, admin can mark the booking as completed.  but if after 30min approximately the transaction isn't done by that email or price match then admin can delete the infos from the DB. so create a full functionality and flow how to solve this requirements if needed you can create models router, controllers 

// this is the seat plan it's from frontend, but it can be changed on different venues-
// export const Ticket = {
//     show: "Adom Surot",
//     date: "2021-07-24",
//     time: ["01:00 PM", "08:00 PM"],
//     auditorium: "ShilpoKola Academy",
//     seat: {
//         A1: {
//             seats: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14"],
//             price: 100 // Price in dollars
//         },
//         A2: {
//             seats: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14"],
//             price: 120 // Example for another section
//         },
//         A3: {
//             seats: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14"],
//             price: 80 // Example for another section
//         }
//     }
// };