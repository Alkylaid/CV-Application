import React, { Component } from 'react';
class EduItem extends Component {
  handleClick = (id) => {
    const item = document.getElementById(id);
    item.style.display = "none";
    const editItem = document.getElementById(`${id}_edit`)
    editItem.style.display= "flex";
        

  }

  handleSave = (id) => {
    const item = document.getElementById(id);
    item.style.display = "grid";
    const editItem = document.getElementById(`${id}_edit`)
    editItem.style.display= "none";
  }

  render() {
    return (
      <div>
        {this.props.edu.map((edu) => {
          return (
            <div key={edu.id} >
              <div className="item edu" id={edu.id}>
                <h3>{edu.major}</h3>
                <p>
                  {this.props.formatDate(edu.from)} to{' '}
                  {this.props.formatDate(edu.to)}{' '}
                </p>
                <p>
                  {edu.name} - {edu.city}
                </p>
                <div>
                  <span className="fa-regular fa-pen-to-square" onClick={() => this.handleClick(edu.id)}></span>
                  <span
                    className="fa-regular fa-trash-can"
                    onClick={() => this.props.delete(edu.id)}
                  ></span>
                </div>
              </div>
              <div id={`${edu.id}_edit`} className="edit-edu-item">
                  <input
                    type="text"
                    id="inst-edit-field"
                    value={edu.name}
                    onChange={(e) => this.props.edit(edu.id, "inst-edit-field", e)}
                    placeholder="Name of Insitution"
                  />
                  <textarea
                    id="city-edit-field"
                    value={edu.city}
                    onChange={(e) => this.props.edit(edu.id, "city-edit-field", e)}
                    placeholder="City/Location"
                  />
                  <input
                    type="text"
                    id="major-edit-field"
                    value={edu.major}
                    onChange={(e) => this.props.edit(edu.id, "major-edit-field", e)}
                    placeholder="Major or Degree"
                  />
                  <div className="date-fields">
                    <input
                      type="date"
                      id="from-edit-field"
                      value={edu.from}
                      onChange={(e) => this.props.edit(edu.id, "from-edit-field", e)}
                      placeholder="From"
                      required
                    />
                    <input
                      type="date"
                      id="to-edit-field"
                      value={edu.to}
                      onChange={(e) => this.props.edit(edu.id, "to-edit-field", e)}
                      placeholder="To"
                      required
                    />
                  </div>
                  <input type="submit" className="save-button" onClick={() => this.handleSave(edu.id)} value="Save" />
        
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EduItem;
