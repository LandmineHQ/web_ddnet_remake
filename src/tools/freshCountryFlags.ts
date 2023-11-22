// ts-node v10.9.1
// Warning: This file is not automatically runtime, and is subject to change.
// if you want to change the regions of "regions.json" in the near of this file
// please run with "npm run update".

import { table } from "console"
import { readFileSync, readdirSync, writeFileSync } from "fs"
import { join } from "path"

const packageInfo = { version: "1.0.3" }
console.log("\n================================================")
console.log(`freshCountryFlags\nversion: ${packageInfo.version}`)
fresh()
console.log("================================================")


function fresh() {
    const flagsDirectoryPath = join(__dirname, "../../public/img/countryflags")
    console.log("get country flag png files at: " + flagsDirectoryPath)
    const res = readdirSync(flagsDirectoryPath, {
        encoding: "utf8",
        recursive: false,
        withFileTypes: false,
    })

    let countries = res.filter(countryPNGFileName => countryPNGFileName.includes(".png"))

    countries = countries.map((countryPNGFileName) => {
        const length = countryPNGFileName.length
        const country = countryPNGFileName.substring(0, length - 4)
        return country
    })

    // read the previous countries
    const oldCountriesPath = join(__dirname, "./regions.json")
    const oldCountries = JSON.parse(readFileSync(oldCountriesPath, { encoding: "utf8" }))
    // find de diffrences of old countries
    const deleteDiffCountries = oldCountries.filter((country: string) => !countries.includes(country))
    const addDiffCountries = countries.filter((country: string) => !oldCountries.includes(country))
    // print the differences
    if (deleteDiffCountries.length > 0 || addDiffCountries.length > 0) {
        table({ deleteDiffCountries, addDiffCountries })
    }
    else {
        console.log("No need update regions.json")
        return
    }

    const outputFilePath = join(__dirname, "./regions.json")
    console.log("writing output file 'regions.json' to: " + outputFilePath)
    writeFileSync(outputFilePath, JSON.stringify(countries), { encoding: "utf-8" })

    const outputTypeFilePath = join(__dirname, "./regions.d.ts")
    console.log("Writing output type file to: " + outputTypeFilePath)
    let tmp = "type Countries = ";
    for (let i = 0; i < countries.length; i++) {
        if (i == countries.length - 1) tmp += `"${countries[i]}";`;
        else tmp += `"${countries[i]}" | `
    }
    writeFileSync(outputTypeFilePath, tmp, { encoding: "utf-8" })
    console.log("fresh done")
}

