import chalk from 'chalk';
import { suma, multiplica } from './modulos/controller.js'

const multisumas = multiplica(suma(1,2), suma(4,5))
console.log(chalk.green(multisumas))
