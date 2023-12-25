import React from 'react';
import Axios from 'axios';
import ShowImage from './ShowImage';


class SearchInput extends React.Component{
     constructor(props){
         super(props)
         this.state={entry: '', images:[]}
        }


onFormSubmit=async (event)=>{
        event.preventDefault();
       const response =await Axios.get(`https://pixabay.com/api/?key=41404523-079e75d2701a0f5e7d2eed67a&q=${this.state.entry}&image_type=photo&pretty=true`)
        this.setState({images: response.data.hits})
    }

render(){
    return(
    <div>
        <div className='ui segment'>
            <form action="" onSubmit={this.onFormSubmit} className='ui form'>

                <div className='field'>
                    <div className='ui massive icon input'>
                        <input type='text'
                        placeholder='search here'
                        onChange={(event)=>this.setState({entry :event.target.value})}
                        value={this.state.entry}
                        />
                        <i className='search icon'></i>
                    </div>
                </div>
            </form>
            we currently have {this.state.images.length} images
            
        </div>
        <ShowImage images={this.state.images}/>
        </div>
    )
    
}

}
export default SearchInput;