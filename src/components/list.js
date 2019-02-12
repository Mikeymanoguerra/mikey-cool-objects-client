import React from 'react';
import { connect } from 'react-redux';
import  ListItem  from './list-item';
import ExpandedListItem from './expanded-list-item';
import { withRouter } from 'react-router-dom';

class List extends React.Component {
  

  render() {
    const objectList = this.props.objects.map((obj, index) => {
      if (this.props.expandedListItem === obj.id) {
        return (
          <li key={index}><ExpandedListItem {...obj} /></li>)
      } else return (
        <li key={index}><ListItem {...obj} /></li>)
    })

    return (
      <div className='display'>
        <ul className='object-list'>
          {objectList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    objects: state.display.objects,
    expandedListItem: state.display.expandedListItem
  })
}

export default withRouter(connect(mapStateToProps)(List));