import React, { Component } from 'react';
class ExpItem extends Component {
  handleClick = (id) => {
    const editItem = document.getElementById(`${id}_edit`);
    const item = document.getElementById(id);
    item.style.display = 'none';
    editItem.style.display = 'flex';
  };

  handleSave = (id) => {
    const item = document.getElementById(id);
    const children = document.querySelectorAll(`#${id}_edit *`);
    let isValid = true;
    children.forEach((child) => {
      if (child.willValidate && !child.checkValidity()) {
        isValid = false;
        child.reportValidity();
      }
    });
    if (isValid) {
      item.style.display = 'grid';
      const editItem = document.getElementById(`${id}_edit`);
      editItem.style.display = 'none';
    }
  };

  render() {
    return (
      <div>
        {this.props.exp.map((exp) => {
          return (
            <div key={exp.id}>
              <div className="item exp" id={exp.id}>
                <h3>{exp.position}</h3>
                <p>
                  {this.props.formatDate(exp.from)} to{' '}
                  {this.props.formatDate(exp.to)}{' '}
                </p>
                <p>{exp.company}</p>
                <p>{exp.responsibility}</p>
                <div>
                  <span
                    className="fa-regular fa-pen-to-square"
                    onClick={() => this.handleClick(exp.id)}
                  ></span>
                  <span
                    className="fa-regular fa-trash-can"
                    onClick={() => this.props.delete(exp.id)}
                  ></span>
                </div>
              </div>
              <div id={`${exp.id}_edit`} className="edit-exp-item">
                <input
                  type="text"
                  id="comp-edit-field"
                  value={exp.company}
                  onChange={(e) =>
                    this.props.edit(exp.id, 'comp-edit-field', e)
                  }
                  placeholder="Company/Institution"
                  required
                />
                <input
                  type="text"
                  id="pos-edit-field"
                  value={exp.position}
                  onChange={(e) => this.props.edit(exp.id, 'pos-edit-field', e)}
                  placeholder="Position"
                  required
                />
                <textarea
                  id="resp-edit-field"
                  value={exp.responsibility}
                  onChange={(e) =>
                    this.props.edit(exp.id, 'resp-edit-field', e)
                  }
                  placeholder="Responsibilities"
                  required
                />
                <div className="date-fields">
                  <input
                    type="date"
                    id="fromEx-edit-field"
                    value={exp.from}
                    onChange={(e) =>
                      this.props.edit(exp.id, 'fromEx-edit-field', e)
                    }
                    placeholder="From"
                    required
                  />
                  <input
                    type="date"
                    id="toEx-edit-field"
                    value={exp.to}
                    onChange={(e) =>
                      this.props.edit(exp.id, 'toEx-edit-field', e)
                    }
                    placeholder="To"
                    required
                  />
                </div>

                <input
                  type="submit"
                  className="save-button"
                  onClick={() => this.handleSave(exp.id)}
                  value="Save"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExpItem;
