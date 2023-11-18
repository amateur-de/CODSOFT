import React from 'react'
import './App.css'

function App() {
  const [expression , setExpression] = React.useState('')
  function handleClick(arg)
  {
    if(expression.length === 0 && (arg === '+' || arg === '-' || arg === 'x' || arg === '/'))
    {
      
      
        return 
      
    }

    if(expression.length >= 1 && (arg === '+' || arg === '-' || arg === 'x' || arg === '/'))
    {
      if(expression[expression.length - 1] === arg)
       {
          return
       }
       else if((expression[expression.length - 1] === '+'
       || expression[expression.length - 1] === '-' || expression[expression.length - 1] === 'x'
       || expression[expression.length - 1] === '/'))
       {
         const newExpression = expression.slice(0,-1)
         setExpression(newExpression + arg)
         return
       }
    }
    
    setExpression(expression + arg)
  }

  function handleDelete()
  {
    if(expression.length === 0)
    {
      return
    }
    setExpression((prevExpression)=>(prevExpression.slice(0,-1)))
  }
  function isOperator(arg)
  {
      if(arg === 'x' || arg === '/')
      {
        return 2
      }
      else if(arg === '+' || arg === '-')
      {
        return 1
      }
      else
      {
        return 0
      }
  }
  function PostFix(exp)
  {
    let result = ''
    
    let stack = []
    console.log('Checking passed value' , exp)
    if(exp.length === 0)
    {
      return
    }
    let i = 0
    let temp
    while(i < exp.length)
    {
      console.log(exp[i])
      console.log(result)
      temp = isOperator(exp[i])
         if(temp > 0)
         {
             if( stack.length === 0)
             {
               stack.push(exp[i])
               ++i
               continue
             }
             else
             {
                if( temp === 2)  
                {
                    while(stack.length !== 0)
                    {
                        if(stack[stack.length - 1] === '+' || stack[stack.length - 1] === '-' )
                        {
                          break
                        }
                        else
                        {
                          result += stack.pop()
                          result += ' '
                        }
                    }
                    stack.push(exp[i])
                    ++i
                    continue
                    
                   
                }
                else
                {
                    
                      while(stack.length !== 0)
                      {
                          result += stack.pop()
                          result+= ' '
                      }
                      stack.push(exp[i])
                      ++i
                      continue
                    
                }
             }
         }
         else
         {
           while((exp[i] !== '+' && exp[i] !== '-' && exp[i] !== 'x' && exp[i] !== '/') && (i<exp.length))
           {
             result += exp[i]
             ++i
            
           }
           result+= ' '
          
           continue
         }
    }
    while( stack.length !== 0)
    {
      result += stack.pop()
      result+= ' '

    }
    return result
  }
  function performOperation(op1 , op2 , opr)
  {
    if( opr === '+')
    {
      return op1 + op2
    }
    else if(opr === '-')
    {
      return op1 - op2
    }
    else if( opr === 'x')
    {
      return op1*op2
    }
    else
    {
      return op1/op2
    }
  }
  function Evaluate()
  {
    if(expression.length === 0)
    {
      return
    }
    let post = PostFix(expression.slice())
    console.log('Postfix: ' ,post)
    let stack = []
    let i = 0
    let secondOpr , firstOpr
    let tempNum
    while(i < post.length)
    {
        if( post[i] === '+'  || post[i] === '-' || post[i] === 'x' || post[i] === '/')
        {
          if(stack.length < 2)
          {
            alert('Invalid Expression')
            return
          }
          else
          {
            secondOpr = stack.pop()
            firstOpr = stack.pop()
            stack.push(performOperation(firstOpr , secondOpr , post[i]))
            ++i
            continue
            
          }
        }
        else if(post[i] === ' ')
        {
               ++i 
               continue
        }
        else
        {
          tempNum = ''
          while(post[i] !== ' '  && i<post.length )
          {
            tempNum += post[i]
            ++i
          }
          stack.push(parseInt(tempNum))
          continue
        }
    }
    if(stack.length === 1)
    {
         setExpression(stack.pop().toString())
         return
    }
    alert('Invalid Expression')
    return
    
    
  }

  
  console.log(expression)
  console.log(expression.length)

  return (
    <>
      <div className='container'>
        <input type="text"  className='display' value={expression}/>
        <button className='destroy' onClick={(e)=> setExpression('')}>AC</button>
        <button className='delete' onClick={handleDelete}>DEL</button>
         <button onClick={(e)=> handleClick('7')}>7</button>
          <button onClick={(e)=> handleClick('8')}>8</button>
          <button onClick={(e)=> handleClick('9')}>9</button>
          <button onClick={(e)=> handleClick('/')}>/</button>
          <button onClick={(e)=> handleClick('4')}>4</button>
          <button onClick={(e)=> handleClick('5')}>5</button>
          <button onClick={(e)=> handleClick('6')}>6</button>
          <button onClick={(e)=> handleClick('x')}>x</button>
          <button onClick={(e)=> handleClick('1')}>1</button>
          <button onClick={(e)=> handleClick('2')}>2</button>
          <button onClick={(e)=> handleClick('3')}>3</button>
          <button onClick={(e)=> handleClick('-')}>-</button>
          <button onClick={(e)=> handleClick('0')}>0</button>
          <button onClick={(e)=> handleClick('+')}>+</button>
          <button className='compute' onClick={Evaluate}>=</button>
           
      </div>
    </>
  )
}

export default App
