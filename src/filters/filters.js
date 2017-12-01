let dateServer = value => {
	return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
};

let booleanFilter = value => value ? '是' : '否';

export {
	dateServer,
	booleanFilter
}