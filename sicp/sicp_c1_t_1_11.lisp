; Упражнение 1.11
; рекурсивный процесс
(define (func n)
  (cond
    ((< n 3) n)
    ((or (= n 3) (> n 3))
     (+ (func (- n 1)) (func (- n 2)) (func (- n 3))))))
 ; Итеративный процесс
