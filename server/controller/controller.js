const modelfile = require('../model/model');

exports.matching = (request, response) => {
    const { tabletype, tableguest, date, time, myemail } = request.body;

    const checking = new modelfile({
        tabletype,
        tableguest,
        date,
        time,
        myemail
    });

    console.log('Reservation Data:', checking);

    checking.save()
        .then(() => {
            response.redirect("/tq");
        })
        .catch(err => {
            console.error('Error saving reservation:', err);
            response.status(500).send('Error saving reservation');
        });
};