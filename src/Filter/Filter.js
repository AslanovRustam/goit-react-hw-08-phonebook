import s from './filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/actions';
import contactsSelectors from '../redux/contacts-selectors';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.section}>
      <label>
        Find Contacts by name
        <input
          type="text"
          className={s.input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
