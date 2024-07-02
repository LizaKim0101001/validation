<template>
    <div>
        <slot/>
        <span>{{ message }}</span>
    </div>
</template>

<script>

export default {
    name: 'FormItem', // компонент обертка для поля, которая при монтировании эмитит событие в родительский компонент для создания массива всех полей для валидации
    props: {
        field: String, // названия поля для валидации
    },
    data() {
        return {
            message: null, // сообщение, которое покажет какая ошибка
        } 
    },
    computed: {
    },
    mounted() {
        this.emitter.emit("add-control", this); //добавляем поле для в список валидации
    },

    beforeUnmount () {
		this.emitter.emit('on-control-remove', this) //убиарем поля из списка валидации
	},

    methods: {
        setMessage(text){ //метод который вызывается из родителя для изменения значения в дочернем компоненте
            this.message = text
        }
    }
}
</script>
  
  <style scoped>
  </style>
  