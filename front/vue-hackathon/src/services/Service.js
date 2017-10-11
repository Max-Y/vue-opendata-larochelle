import elasticsearch from 'elasticsearch'
import {mapGetters, mapActions} from 'vuex'
import Store from '../store/index'

export default {
  client: null,
  addData(data) {
    Store.dispatch('addData', data);
  },
  updateData(data) {
    Store.dispatch('updateData', data);
  },
  newRequest(data) {
    Store.dispatch('newRequest', data);
  },
  auth () {
    this.client = new elasticsearch.Client({
      host: [
        {
          host: 'webapp15.nantes.sii.fr',
          auth: 'elastic:funtastic',
          protocol: 'http',
          port: 80
        }
      ],
      log: 'debug'
    });
    return this.client;
  },
  request(searchParams) {
    return this.client.search(searchParams);
  },
  get(searchParams) {
    if (this.client) {
      return this.request(searchParams);
    }
    else {
      this.auth();
      return this.request(searchParams);
    }
  },
  mapping(searchParams) {
    if (this.client) {
      return this.client.indices.getMapping(searchParams);
    }
    else {
      this.auth();
      return this.client.indices.getMapping(searchParams);
    }
  }
}
