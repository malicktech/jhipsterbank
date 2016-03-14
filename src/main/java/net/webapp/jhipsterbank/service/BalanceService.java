package net.webapp.jhipsterbank.service;

import net.webapp.jhipsterbank.domain.BankAccount;
import net.webapp.jhipsterbank.domain.Operation;
import net.webapp.jhipsterbank.repository.BankAccountRepository;
import net.webapp.jhipsterbank.repository.OperationRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BalanceService {

    private final Logger log = LoggerFactory.getLogger(BalanceService.class);

    @Autowired
    private OperationRepository operationRepository;
    
    @Autowired
    private BankAccountRepository bankAccountRepository;
    
	public Operation add(Operation operation) {
		// TODO Auto-generated method stub		
		Operation result = operationRepository.save(operation);
		BankAccount bankAccount = bankAccountRepository.findOne(result.getBankAccount().getId());
		bankAccount.setBalance(bankAccount.getBalance().add(result.getAmount()));
		return result;
	}

}
