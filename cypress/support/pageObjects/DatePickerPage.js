/// <reference types="Cypress" />

class DatePickerPage{

    getDatePicker(){
        return cy.get('input#txtDate')
    }

    getCalendar(){
        return cy.get('div#dateOne')
    }

    getNavigateBack(){

    }

    getNavigateForward(){

    }

    getMonthName(){

    }

    getYearName(){

    }

    getCalendarDays(){
        
    }
}