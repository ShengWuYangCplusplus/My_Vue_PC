import { mapState } from 'vuex'
const register = {
  data() {
    return {
      registerBaseRules: {},
    }
  },
  computed: {
    ...mapState(['RegisterStep']),
  },
  methods: {

  }
}
export default register