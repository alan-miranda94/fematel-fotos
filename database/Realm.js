import Realm from 'realm'
import {SitesScheme, InventarioScheme, ImageScheme, ListScheme, DeParaScheme} from './schemas/siteSchema'

export const getRealm = async () => await Realm.open({
    path:'check-report',
    schema:[SitesScheme, InventarioScheme, ListScheme, ImageScheme, DeParaScheme],
    deleteRealmIfMigrationNeeded: true,
})

export const a = () =>{
    console.log('AAA')
}