describe('FINAL mājas darbs', () => {
    it('Informācijas ievade nepieciešamajās formās, laukos, pogās utt.', () => {
      //atver mājas lapu testēšanai
      cy.visit('https://demoqa.com/automation-practice-form');

    //ievada vārdu
    cy.get('#firstName').type('John');

    //ievada uzvārdu
    cy.get('#lastName').type('Doe');

    //ievada epasta adresi
    cy.get('#userEmail').type('johndoe@example.com');

    //izvēlas dzimumu - M
    cy.get('#gender-radio-1').check({ force: true }); // force click to ensure selection

    //ievada doto telefona nr
    cy.get('#userNumber').type('1234567890');

    //Atver datuma izvēlni
    cy.get('#dateOfBirthInput').click();

    //Izvēlas doto mēnesi un gadu
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1930');

    //Papildus pārbāude, vai mēnesis un gads ir izvēlēts pareizi
    cy.get('.react-datepicker__month-select').should('have.value', '1'); // February is 1 (0-indexed)
    cy.get('.react-datepicker__year-select').should('have.value', '1930');

    //Uzkliko uz 28 dienas
    cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();

    //Izvēlas priekšmetu Economics
    cy.get('#subjectsInput').type('Economics');
    cy.contains('.subjects-auto-complete__menu-list', 'Economics').click();

    //Uzstāda hobiju
    cy.get('#hobbies-checkbox-3').check({ force: true }); // force click to ensure selection

    //Augšupieldā failu izmantojot drag-and-drop metodi
    cy.get('#uploadPicture').selectFile('cypress/fixtures/files/test.png', { action: 'drag-drop' });

    //UZstāda adresi
    cy.get('#currentAddress').type('6274 Stander Trail Apt. 273');

    //UZstāda štatu uz NCR
    cy.get('#state').click(); // Click on the State dropdown
    cy.get('#react-select-3-option-0').click(); // Select NCR

    //Uzstāda pilsētu uz Delhi
    cy.get('#city').click(); // Click on the City dropdown
    cy.get('#react-select-4-option-0').click(); // Select Delhi

    //kliks uz Submit pogas
    cy.get('#submit').click();

    //Pārbauda tabulā ievadītās/norādītās rindas
    cy.get('.table-responsive').within(() => {
      cy.contains('tr', 'Student Name').should('contain', 'John Doe');
      cy.contains('tr', 'Student Email').should('contain', 'johndoe@example.com');
      cy.contains('tr', 'Gender').should('contain', 'Male');
      cy.contains('tr', 'Mobile').should('contain', '1234567890');
      cy.contains('tr', 'Date of Birth').should('contain', '28 February,1930');
      cy.contains('tr', 'Subjects').should('contain', 'Economics');
      cy.contains('tr', 'Hobbies').should('contain', 'Music');
      cy.contains('tr', 'Picture').should('contain', 'test.png');
      cy.contains('tr', 'Address').should('contain', '6274 Stander Trail Apt. 273');
      cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
    });
    
    })
  })