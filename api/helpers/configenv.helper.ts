import * as dotenv from 'dotenv'

const environment: string | undefined = process.env.NODE_ENV

/**
 * Loads the .env file locally if the NODE_ENV environment variable is anything but prod
 */
export const configEnv = () => {

    // check if environment is correct.. otherwise the base urls will not work
    if (!environment || !['staging', 'dev', 'prod', 'test'].includes(environment)) {
        console.log(`Please use the following format when running the test script: NODE_ENV=staging|dev|prod|test 
                    \n NODE_ENV actual: ${environment}`)
        process.exit()
    }

    // load .env for development
    if (!environment || ['dev', 'test'].includes(environment)) {
        dotenv.config();
    }
}
