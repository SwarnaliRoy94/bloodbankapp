import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const InputField = props => {
  const [error, setError] = useState('');
  const [isValidated, setIsValidated] = useState(false);

  const validate = (rule, value) => {
    if (rule.type === 'required') {
      return value == '' || value == null ? false : true;
    }
    if (rule.type === 'minimumLength') {
      if (value.length < rule.value) {
        return false;
      }
      return true;
    }
  };

  const onValidate = () => {
    const {validations, value} = props;
    let isValid = false;

    for (let i = 0; i < validations.length; i++) {
      const rule = validations[i];
      isValid = validate(rule, value);
      console.log(isValid)
      if (!isValid) {
        setError(rule.msg);
        break;
      }
      if (i == validations.length - 1) {
        setError('');
      }
    }
  };

  return (
    <View>
      <TextInput {...props} onBlur={() => onValidate()} />
      {error !== '' && <Text style={{color: 'yellow'}}>{error}</Text>}
    </View>
  );
};

export default InputField;
