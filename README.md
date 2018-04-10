Allowed libraries : jest
Allowed tools : create-react-app
Constraint : Googling is not allowed.
Tests for :
(1) Ability to write simple pure functions according to specification. (2) Ability to write very trivial unit tests.
Additional notes:
1. formatElapsedTime() must accept numeric elapsedMilliseconds as its only argument.
2. For any other input that is not a number, the return must be "00:00:00".
3. The expected format is either "00:00.00", if the elapsed time less than 1 hour, otherwise it
will be "00:00:00.00". For example formatElapsedTime(129100) returns "02:09.10" while formatElapsedTime(100000000) gives "27:46:40.00".
