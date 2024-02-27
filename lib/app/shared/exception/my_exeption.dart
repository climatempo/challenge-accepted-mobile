class MyException implements Exception {
  final Map message;

  MyException(this.message);
}

class LimitAccessError extends MyException {
  LimitAccessError(super.message);
}

class FristTimeExeption extends MyException {
  FristTimeExeption(super.message);
}
