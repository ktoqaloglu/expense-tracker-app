import { View, StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Toilet Paper',
    amount: 94.12,
    date: new Date('2025-03-15')
  },
  {
    id: 'e2',
    description: 'New TV',
    amount: 799.49,
    date: new Date('2025-03-11')
  },
  {
    id: 'e3',
    description: 'Car Insurance',
    amount: 294.67,
    date: new Date('2025-03-13')
  },
  {
    id: 'e4',
    description: 'New Desk (Wooden)',
    amount: 450,
    date: new Date('2025-03-12')
  }
];

function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});