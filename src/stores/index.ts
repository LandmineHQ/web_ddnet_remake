import { watch } from 'vue'
import { createPinia } from 'pinia'
import useUserInfoStore from './user'
import { getSkinSrcPath } from '@/axios/Mappers'
import UserIndexedDB from './UserIndexedDB'

// create pinia instance
const pinia = createPinia()
/**
 * auto update pinia state
 */
function autoUpdatePinia() {
    watch(() => useUserInfoStore().skinName, (value, oldValue) => {
        console.log("detected skinName changed from", oldValue, "to", value)
        getSkinSrcPath(value).then(res => useUserInfoStore().skinSrcPath = res)
        UserIndexedDB.saveIntoIndexedDB()
    })

    watch(() => useUserInfoStore().country, (value, oldValue) => {
        console.log("detected country changed from", oldValue, "to", value)
        UserIndexedDB.saveIntoIndexedDB()
    })

    watch(() => useUserInfoStore().name, (value, oldValue) => {
        console.log("detected name changed from", oldValue, "to", value)
        // update indexedDB
        UserIndexedDB.freshSource()
    })
}


export { pinia, autoUpdatePinia }