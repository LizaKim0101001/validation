<template>
  <ValidatorComposer
    :model = "model"
    :rules = "rules"
    ref="validator"
  >
    <FormItem field="name">
      <input type="text" v-model="model.name">
    </FormItem>
    <FormItem field="age">
      <input type="text"  v-model="model.age">
    </FormItem>
    <button @click="getValid()">Валидация</button>
  </ValidatorComposer>
</template>

<script>

import { required, minLength, isNumber  } from "./common/validator";
import ValidatorComposer from './components/ValidatorComposer.vue'
import FormItem from './components/FormItem.vue'

export default {
  name: 'App',
  components: {
    ValidatorComposer,
    FormItem
  },

  data() {
    return {
      model:  {
        name: 'Ivan',
        age: 32,
      },
      rules: { //Пример использования создания правил для валидации
        name: [required(), minLength(3)],
        age: [required(), isNumber()]
      },
      canSafeFor: false
    } 
  },
	mounted() {
    
	},
  methods: {
    getValid() {
      this.canSafeForm = this.$refs.validator.validator()
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
