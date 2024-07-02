import _ from 'lodash';
export const required = (message = 'Поле обязательно для заполнения') =>
	({
		validator: value => (typeof(value) === 'number') || 
							(typeof(value) === 'boolean' && value) ||
							_.isDate(value) || 
							!_.isEmpty(value),
		message
	})
export const minLength = (min, message) =>
	({
		validator: value => !_.isEmpty(value) && value.length >= min,
		message: message || `Минимально допустимое количество символов - ${min}`
	})
export const maxLength = (max, message) =>
	({
		validator: value => _.isEmpty(value) || value.length <= max,
		message: message || `Превышено максимально допустимое количество символов (${max})`
	})
export const isNumber = () =>
	({
		validator: value => {
			let val = value
			if (typeof value !== 'number') {
				val = parseFloat((value || '').replace(/,/g, '.'))
			}
			return isFinite(val)
		},
		message: `Значение поля должно быть числом`
	})
export const minValue = min =>
	({
		validator: value => {
			let res = false,
				val = value
			if (typeof value !== 'number') {
				val = parseFloat((value || '').replace(/,/g, '.'))
			}
			if (isFinite(val)) {
				res = (val >= min)
			}
			return res
		},
		message: `Минимальное значение поля - ${min}`
	})
export const maxValue = max =>
	({
		validator: value => {
			let res = false,
				val = value
			if (typeof value !== 'number') {
				val = parseFloat((value || '').replace(/,/g, '.'))
			}
			if (isFinite(val)) {
				res = (val <= max)
			}
			return res
		},
		message: `Максимальное значение поля - ${max}`
	})