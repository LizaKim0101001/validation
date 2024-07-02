<template>
    <slot/>
</template>
<script>
// компонент обертка для сбора данных полей и выполнение валидации из родителя
import _ from 'lodash';

export default {
    name: 'ValidatorComposer',
    props: {
        model: Object,
        rules: Object
    },
    data() {
        return {
            fields: []
        } 
    },
    computed: {
    },
    created() {
        this.emitter.on("add-control", this.addControl); //при монтировании поля записываютя в массив
        this.emitter.on('on-control-remove', this.removeControl) //убираем поля из массива
    },

    methods: {
        validator() { // функция для валидации всех полей формы
            let validity = true
            this.fields
            .filter(({field}) => _.has(this.rules, field))
            .forEach(el =>{
                const invalid = this.singleFieldValidate(el)
                if (invalid) {
                    validity = !invalid
                }
            })
            return validity
        },
        singleFieldValidate(formItem) { // функция для валидации 1 поля
            const invalid = (this.rules[formItem.field] || [])
				.find(rule => !rule.validator(this.model[formItem.field]))

			formItem.setMessage(invalid ? invalid.message : null)
            return invalid
        },
        addControl(field) {
            if (field) {
                this.fields.push(field)
            }
        },
        removeControl(field) {
			if (field) this.fields.splice(this.fields.indexOf(field), 1)
		},

    },
}
</script>
  
  <style scoped>
  </style>
  