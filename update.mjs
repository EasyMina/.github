import fs from 'fs'
import { config } from './src/data/config.mjs'
import { BadgeTable } from './node_modules/badgetable/src/BadgeTable.mjs'
const btg = new BadgeTable()

let template = fs.readFileSync( './src/data/template.txt', 'utf-8' )

const badgeTable = btg.getTable( {
    'preset': 'npmPackages',
    'projects': config['npmPackages']
} )

const strs = template.replace( '{{badgeTable}}', badgeTable)
fs.writeFileSync( './profile/README.md', strs, 'utf-8' )
console.log( 'README.md updated successfully.')
