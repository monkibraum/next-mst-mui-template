import { useStaticRendering } from 'mobx-react';
import { types } from "mobx-state-tree"
import _AuthStore from './authstore';
import _PostStore from './poststore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

const RootStore = types.model({
  AuthStore: _AuthStore,
  PostStore: _PostStore,
});

export default function initStore() {
  if (isServer) {
    let AuthStore = _AuthStore.create({  }); 
    let PostStore = _PostStore.create({  });
    return RootStore.create({ AuthStore, PostStore })
  }
  if (store === null) {
    let AuthStore = _AuthStore.create({ }); 
    let PostStore = _PostStore.create({ });
    store = RootStore.create({ AuthStore, PostStore })
  }
  return store
}