import React, {Component} from 'react'
import api from '../../services/api.js'
import {link, Link} from 'react-router-dom'

import './styles.css'

export default class Main extends Component{
    state = {
        products: [],
        pageInfo:{},
        page: 1,
    }
    componentDidMount(){
        this.loadProducts()
    }
    loadProducts = async (page = 1) => {
        console.log("page", page)
        const response = await api.get(`products?page=${page}`)

        const {docs, ... pageInfo} = response.data
        this.setState({ products: docs, pageInfo, page})
    }
    prevPage = () =>{
        console.log('entrei')
        const {page} = this.state
        console.log('page', page)
        if (page==1) return
        const pageNumber = page - 1
        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        const {page, pageInfo} = this.state
        if (page===pageInfo.pages) return
        const pageNumber = page + 1
        this.loadProducts(pageNumber)
    }


    render() {
        const{products} = this.state
        return (
            <div className= 'product-list'>
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                    
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                <button onClick={this.prevPage}>Anterior</button>
                <button onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}