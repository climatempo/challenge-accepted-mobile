import Realm from 'realm'

class SearchCities extends Realm.Object { }

SearchCities.schema = {
    name: 'SearchCities',
    properties: {
        nameCity: 'string',
        id: 'int',
        state: 'string',
        searchDate: 'string',
        searchDate_br: 'string'
    }

}


class Weather extends Realm.Object { }

Weather.schema = {
    name: 'Weather',
    properties: {
        id: 'int',
        nameCity: 'string',
        state: 'string',
        date: 'string',
        date_br: 'string',
        phraseWeather: 'string',
        temperature_max: 'int',
        temperature_min: 'int',
        wind: 'int',
        precipitation: 'int',
        humidity_max: 'int'
    }
}

const database = new Realm({ schema: [SearchCities, Weather], schemaVersion: 3 })

// Search Cities

const addSearchCity = (nameCity, id, state, searchDate, searchDate_br) => {
    database.write(() => {
        database.create('SearchCities', { nameCity, id, state, searchDate, searchDate_br })
    })
}

const getAllSearchCities = () => {
    return database.objects('SearchCities')
}

const deleteAllSearchCities = () => {
    database.write(() => {
        database.delete(getAllSearchCities())
    })
}

const createWeather = (id = 0, nameCity = '', state = '', date = '', date_br = '', phraseWeather = '', temperature_max = 0, temperature_min = 0, wind = 0, precipitation = 0, humidity_max = 0) => {
    database.write(() => {
        database.create('Weather', { id, nameCity, state, date, date_br, phraseWeather, temperature_max, temperature_min, wind, precipitation, humidity_max })
    })
}

const getWeather = () => {
    return database.objects('Weather')
}

const updateWeather = (weekdays) => {
    database.write(() => {
        const weather = getWeather()
        weather.map((day,index)=> { 
           day.id = weekdays.id, 
            day.nameCity = weekdays.name, 
            day.state =  weekdays.state,
            day.date = weekdays.data[index].date,
            day.date_br =weekdays.data[index].date_br, 
            day.phraseWeather = weekdays.data[index].text_icon.text.phrase.reduced, 
            day.temperature_max = weekdays.data[index].temperature.max, 
            day.temperature_min= weekdays.data[index].temperature.min, 
            day.wind= weekdays.data[index].wind.velocity_avg, 
            day.precipitation= weekdays.data[index].rain.precipitation, 
            day.humidity_max=  weekdays.data[index].humidity.max})
    })
}

const deleteAllWeather = () => {
    database.write(() => {
        database.delete(getWeather())
    })
}

export default database
export {
    addSearchCity,
    getAllSearchCities,
    deleteAllSearchCities,
    createWeather,
    getWeather,
    updateWeather,
    deleteAllWeather
}
