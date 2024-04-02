const localStorageMock = (() => {
	const store = new Map();

	return {
		getItem(key) {
			return store.get(key) ?? null;
		},

		setItem(key, value) {
			store.set(key, value);
		},

		clear() {
			store.clear();
		},

		removeItem(key) {
			store.delete(key);
		},

		getAll() {
			return store;
		},
	};
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });
