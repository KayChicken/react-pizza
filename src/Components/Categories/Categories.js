import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from '../../app/slices/filterSlice'
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

const Categories = () => {

    const categoryId = useSelector(store => store.filter.categoryId)
    const dispatch = useDispatch()

    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые"
    ]







    return(
        <div className="categories">
            <ul>
                {categories.map((categoryName,index) =>
                    <li key={index} onClick={() => {dispatch(setCategoryId(index))}} className={categoryId === index ? 'active' : ''}>{categoryName}</li>
                )}
            </ul>
        </div>


    )
}

export default Categories