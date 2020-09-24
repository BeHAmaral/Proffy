const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: "Bernardo Amaral",
        avatar: "https://lh3.googleusercontent.com/ogw/ADGmqu-35S7DueJWjpLCMhssosoe8GtXECQ5Eh6yLkSA=s32-c-mo",
        whatsapp: "999979866",
        bio: "Instrutor de Educação Física"
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})