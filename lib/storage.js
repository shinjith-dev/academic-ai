import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSchedules } from "./queries/dashboard";

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: 1000 * 3600 * 24,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    async schedule(params) {
      let {
        id,
        // syncParams: { extraFetchOptions, someFlag },
      } = params;
      const user = await storage.load({ key: "loginUser" });
      const res = await getSchedules(user.username);
      console.log(`schedule sync response: `, res);
      if (res) {
        storage.save({ key: "schedule", data: res });
        return schedule;
      } else {
        throw new Error("Error syncing schedule");
      }
    },
  },
});

export default storage;
