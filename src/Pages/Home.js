import React, {useContext, useRef} from 'react';
import Categories from "../Components/Categories/Categories";
import Sort, {list} from "../Components/Sort/Sort";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import {useState,useEffect} from "react";
import Pagination from "../Components/Pagination/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import {setFilter, setPageCount} from "../app/slices/filterSlice";
import qs from 'qs'
import {fetchPizza} from "../app/slices/pizzaSlice";


const Home = () => {
    const isSearch = useRef(false)
    const isMounted = useRef(false)
    const navigate = useNavigate()
    const {searchValue} = useSelector(state => state.filter)
    const {sort,categoryId,pageCount} = useSelector(store => store.filter)
    const {items,status} = useSelector(store => store.pizza)



    const dispatch = useDispatch()


    const getPizzas = async () => {

        const order = sort.sort.includes('-') ? 'asc' : 'desc'
        const sortBy = sort.sort.replace('-','')
        const categoryBy = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `search=${searchValue}` : ''



        dispatch(fetchPizza({
            order,
            sortBy,
            categoryBy,
            search,
            pageCount
        }))


    }



    useEffect(() => {
        if (isMounted.current) {

            const queryString = qs.stringify({
                sort : sort.sort,
                categoryId,
                pageCount
            })

            navigate(`?${queryString}`)

        }
        isMounted.current = true


    },[categoryId,sort,searchValue,pageCount])




    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = list.find(obj => obj.sort === params.sort)
            dispatch(setFilter({
                ...params,
                sort

            }))
            isSearch.current = true
        }
    },[])


    useEffect(() => {
        window.scroll(0 , 0)
        if (!isSearch.current) {
            getPizzas()
        }
        isSearch.current = false

    }, [categoryId,sort,searchValue,pageCount])



    const onChangePage = number => {
        dispatch(setPageCount(number))
    }


    const skeletons = [...new Array(7)].map((_,index) => <Skeleton key={index}/>)
    const pizzas = items.map((obj) => <PizzaBlock
        id={obj.id}
        title={obj.name}
        price={obj.price}
        img={obj.imageUrl}
        sizes={obj.sizes}
        types={obj.types}

    />)

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {status === 'error' ? (<div>Ошибка загрузки, перезагрузите страницу</div>) : (status === 'loading' ? skeletons : pizzas)}



                </div>
                <Pagination value={pageCount} setPage={onChangePage}/>
            </div>
        </div>
    );
};

export default Home;