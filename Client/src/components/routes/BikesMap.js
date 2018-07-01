import React from 'react'
// import * as ReactDOM from 'react-dom';
// import { Map } from 'react-arcgis';
// import { graphicsService } from './graphicsSevice';
// import { assignMapEventHandlers, addUIWidgets } from './map-ui-widgets';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { EnhancedBikeFilterForm } from '../forms/BikeFilterForm/EnhancedBikeFilterForm';


const mapStateToProps = state => ({ filter: state.esriStore.filter })
const mapDispatchToProps = dispatch => ({ 
    filterBikes: (payload) => dispatch({ type: 'FILTER_BIKES', payload }) , 
    loadEsriModules: () => dispatch({ type: 'LOAD_ESRI_MODULES' }) 
})

export class Com extends React.Component {

    componentDidMount() {
        this.props.loadEsriModules()
    }

    render() {
        return (
            <React.Fragment>
            <div className="container mb-4">
                <EnhancedBikeFilterForm filter={this.props.filter} filterUpdated={this.props.filterBikes}/>
            </div>
            <div className="mb-4" id="viewMap" style={{ height: `780px` }}></div>
            </React.Fragment>
        )

    }

}

export const BikesMap = connect(mapStateToProps, mapDispatchToProps)(Com)

Com.propTypes = {
    loadEsriModules: PropTypes.func,
    filterBikes: PropTypes.func,
    filter: PropTypes.object
}
