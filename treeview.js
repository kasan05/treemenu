import React from 'react';
import TreeMenu from "react-simple-tree-menu";
import TreeViewDetails from './treeviewdetails';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import {properties,modaldata} from './properties';

class TreeViews extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                selectedOption:"",
              initiallyOpenProperties: [],
              modalObj:{}
            };
    }
    handleClick=(value)=>{
       
       const arr = value.key.split('/');
        if(arr.length===3){
          const result = modaldata.filter(modal=>modal.name===arr[2]);
         this.setState({modalObj:result[0]});
        }

    }

    render(){
        return(      
          
              <div className="d-flex  align-content-center">
                  <SplitterLayout >
                   
                      <div>
                        <TreeMenu
                          data={properties}
                          initialOpenNodes={this.state.initiallyOpenProperties}
                          hasSearch={false}
                          onClickItem={this.handleClick}
                          />
                      </div>
                      <div>
                         <TreeViewDetails modalObj={this.state.modalObj}/>
                      </div>
                     
                   </SplitterLayout>
                  </div>
                );
    } 
}
export default TreeViews;