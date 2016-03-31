import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class MissionSelect extends React.Component{
  constructor(props) {    /* Note props is passed into the constructor in order to be used */
    super(props);
    this.state = {
        missions: props.missions,
        selectHandler: props.selectHandler,
        value: null
    };
  }

  handleChange (event, index, value) {
    this.setState({value});
    this.state.selectHandler(value);
  }

  renderMenuItems(){
    return this.state.missions.map((mission) => {
      return <MenuItem key={mission.name} value={mission} primaryText={mission.name} />
    });
  }

  render() {
    return (
      <SelectField
        autoWidth={true}
        style={{ fontSize: '1em', width: '90%', overflow: 'hidden', display: 'inline-block'}}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        floatingLabelText="mission"
        floatingLabelStyle={{fontSize: "1.2em"}}
      >
        {this.renderMenuItems()}
      </SelectField>
    );
  }
}

module.exports = MissionSelect;