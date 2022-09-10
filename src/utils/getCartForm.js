export const getCartForm = () => {
    let storage = window.localStorage.getItem("items")
    if (storage) {
        return {
            items : JSON.parse(storage),
            totalPrice : JSON.parse(storage).reduce((total,obj) => (obj.price * obj.count) + total , 0)
        }
    }
    return {
        items : [],
        totalPrice: 0
    }
}