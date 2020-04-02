import { element, by, ElementFinder } from 'protractor';

export class OperationComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-operation div table .btn-danger'));
  title = element.all(by.css('jhi-operation div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class OperationUpdatePage {
  pageTitle = element(by.id('jhi-operation-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  dateInput = element(by.id('field_date'));
  descriptionInput = element(by.id('field_description'));
  amountInput = element(by.id('field_amount'));
  typeSelect = element(by.id('field_type'));

  labelsSelect = element(by.id('field_labels'));
  bankAccountSelect = element(by.id('field_bankAccount'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDateInput(date: string): Promise<void> {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput(): Promise<string> {
    return await this.dateInput.getAttribute('value');
  }

  async setDescriptionInput(description: string): Promise<void> {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput(): Promise<string> {
    return await this.descriptionInput.getAttribute('value');
  }

  async setAmountInput(amount: string): Promise<void> {
    await this.amountInput.sendKeys(amount);
  }

  async getAmountInput(): Promise<string> {
    return await this.amountInput.getAttribute('value');
  }

  async setTypeSelect(type: string): Promise<void> {
    await this.typeSelect.sendKeys(type);
  }

  async getTypeSelect(): Promise<string> {
    return await this.typeSelect.element(by.css('option:checked')).getText();
  }

  async typeSelectLastOption(): Promise<void> {
    await this.typeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async labelsSelectLastOption(): Promise<void> {
    await this.labelsSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async labelsSelectOption(option: string): Promise<void> {
    await this.labelsSelect.sendKeys(option);
  }

  getLabelsSelect(): ElementFinder {
    return this.labelsSelect;
  }

  async getLabelsSelectedOption(): Promise<string> {
    return await this.labelsSelect.element(by.css('option:checked')).getText();
  }

  async bankAccountSelectLastOption(): Promise<void> {
    await this.bankAccountSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async bankAccountSelectOption(option: string): Promise<void> {
    await this.bankAccountSelect.sendKeys(option);
  }

  getBankAccountSelect(): ElementFinder {
    return this.bankAccountSelect;
  }

  async getBankAccountSelectedOption(): Promise<string> {
    return await this.bankAccountSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class OperationDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-operation-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-operation'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
