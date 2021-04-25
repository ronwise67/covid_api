const baseURL = 'https://api.covid19api.com/summary'
let url

// const global = document.querySelector('Global')
// const countries = document.querySelector('Countries')
// const country = document.querySelector('Country')
// const newCases = document.querySelector('NewConfirmed')
// const newDeaths = document.querySelector('NewDeaths')
// const totalConfirmed = document.querySelector('TotalConfirmed')
// const totalDeaths = document.querySelector('TotalDeaths')
const tableBody = document.querySelector('#table-body')


document.getElementById("stats-button").onclick = renderStats;


function renderStats() {
    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            console.log(data.Countries)
            let countries = data.Countries
            countries.forEach(country => {
                let tableRow = document.createElement('tr')
                let tableHeadCountry = document.createElement('th')
                let tableHeadNewCases = document.createElement('th')
                let tableHeadTotalCases = document.createElement('th')
                let tableHeadNewDeaths = document.createElement('th')
                let tableHeadTotalDeaths = document.createElement('th')

                tableHeadCountry.innerText = country.Country
                tableHeadNewCases.innerText = country.NewConfirmed
                tableHeadTotalCases.innerText = country.TotalConfirmed
                tableHeadNewDeaths.innerText = country.NewDeaths
                tableHeadTotalDeaths.innerText = country.TotalDeaths

                tableRow.appendChild(tableHeadCountry)
                tableRow.appendChild(tableHeadNewCases)
                tableRow.appendChild(tableHeadTotalCases)
                tableRow.appendChild(tableHeadNewDeaths)
                tableRow.appendChild(tableHeadTotalDeaths)


                tableBody.appendChild(tableRow)
            });
        })
}

document.getElementById("stats-button").reset();



