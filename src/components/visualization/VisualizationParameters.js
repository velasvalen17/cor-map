import React, { useState, useCallback } from 'react'
import moment from 'moment'
import { Button, InputField } from '@dhis2/ui-core'

const defaultParameters = {
    startDate: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    endDate: moment().subtract(1, 'day').format('YYYY-MM-DD')
}

export const VisualizationParameters = ({ parameters: initialParameters, onSubmit }) => {
    const parameters = initialParameters || defaultParameters

    const [startDate, setStartDate] = useState(parameters.startDate)
    const [endDate, setEndDate] = useState(parameters.endDate)

    const onFormSubmit = e => {
        e.preventDefault()
        onSubmit({ startDate, endDate })
    }

    const dirty = startDate !== initialParameters?.startDate || endDate !== initialParameters?.endDate
    return (
        <form onSubmit={onFormSubmit}>
            <InputField label="Enrollment start date" type="date" value={startDate} onChange={e => setStartDate(e.value)}></InputField>
            <InputField label="Enrollment end date" type="date" value={endDate} onChange={e => setEndDate(e.value)}></InputField>
            <div className="grid-col grid-col-sm">
                <Button type="submit" primary disabled={!dirty}>Update</Button>
            </div>
        </form>
    )
}