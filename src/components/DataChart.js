import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const DataChart = ({height, width}) => {

    const url = "http://dummy.restapiexample.com/api/v1/employees";
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);
    const [employeeId, setEmployeeId] = useState([]);


    useEffect( () => {
        const empSal = [];
        const empAge = [];
        const empId = [];
        axios
        .get(url)
        .then( res => {
            console.log(res);
            for( const dataObj of res.data.data ){
                empSal.push(parseInt(dataObj.employee_salary));
                empAge.push(parseInt(dataObj.employee_age));
                empId.push(parseInt(dataObj.id));
            }
            console.log(empSal, empAge);
            setEmployeeSalary( [...empSal] );
            setEmployeeAge( [...empAge] );
            setEmployeeId( [...empId] );
        })
        .catch(err => {
            console.log(err)
        })
    }, [] )
    
    return (
        <div>
            <Line 
                height={height}
                width={width}
                data = {{
                    labels: employeeId,
                    datasets: [
                        {
                            label: "Employee Salary",
                            data: employeeSalary,
                            backgroundColor: ["rgb(90, 155, 155)"],
                        },
                        {
                            label: "Employee Age",
                            data: employeeAge,
                            backgroundColor: ["rgb(191, 65, 126)"],
                        },
                    ],
                }}
            />
        </div>
    )
}

export default DataChart
