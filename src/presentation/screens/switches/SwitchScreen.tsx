import { useState } from 'react';
import { Switch, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
    <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }} >
        <Card>
        <CustomSwitch 
        isOn= {isEnabled}
        onChange={ () => toggleSwitch() }
        text='Encendido'
        />

           {/*
            <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            /> 
            */} 
        </Card>

             
        
    </CustomView>
    )
  }