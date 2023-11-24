import fs from 'fs'
import { config } from './src/data/config.mjs'
import { BadgeTable } from './node_modules/badgetable/src/BadgeTable.mjs'
const btg = new BadgeTable()


let strs = ''
strs += "# Test\n"
strs += btg.getTable( {
    'template': 'npmPackages',
    'projects': config['npmPackages']
} )


fs.writeFileSync( './tests/test.md', strs, 'utf-8' )
console.log( 'README.md updated successfully.')
